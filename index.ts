import reservedText from './reserved';

const randomTags = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'g',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
];

const random = (start: number, end: number) => {
  var range = end - start;
  return Math.floor(Math.random() * range + start);
};

const string = (val: any) => {
  return null === val ? '' : String(val);
};

const literal = (val: any) => {
  if (null == val) {
    return 'NULL';
  }
  if (Array.isArray(val)) {
    let values: string[] = [];
    val.map((obj) => {
      values.push(literal(obj));
    });

    return '(' + values.join(', ') + ')';
  }
  let backslash = ~val.indexOf('\\');
  let prefix = backslash ? 'E' : '';
  val = val.replace(/'/g, "''");
  val = val.replace(/\\/g, '\\\\');
  return prefix + "'" + val + "'";
};

const dollarQuotedString = (val: any) => {
  if (val === undefined || val === null || val === '') {
    return '';
  }
  let randomTag = '$' + randomTags[random(0, randomTags.length)] + '$';
  return randomTag + val + randomTag;
};

const validIdent = (id: string) => {
  let exists = reservedText.filter((obj) => {
    return obj.keyword === id;
  })[0];

  if (exists) {
    return false;
  }
  return /^[a-z_][a-z0-9_$]*$/i.test(id);
};

const quoteIdent = (id: string) => {
  id = id.replace(/"/g, '""');
  return '"' + id + '"';
};

const ident = (val: string) => {
  return validIdent(val) ? val : quoteIdent(val);
};

const sqlEscape = (query: string, ...args: any[]) => {
  let i = 0;
  const beautifiedQuery = query.replace(/%([%sILQ])/g, (_, type) => {
    if ('%' === type) return '%';
    let arg = args[i++];

    switch (type) {
      case 's':
        return string(arg);
      case 'I':
        return ident(String(arg));
      case 'L':
        return literal(arg);
      case 'Q':
        return dollarQuotedString(arg);
    }
  });

  return beautifiedQuery;
};

export = sqlEscape;
