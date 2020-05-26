const reservedText = [
  {
    keyword: 'aes128',
    value: true,
  },
  {
    keyword: 'aes256',
    value: true,
  },
  {
    keyword: 'all',
    value: true,
  },
  {
    keyword: 'allowoverwrite',
    value: true,
  },
  {
    keyword: 'analyse',
    value: true,
  },
  {
    keyword: 'analyze',
    value: true,
  },
  {
    keyword: 'and',
    value: true,
  },
  {
    keyword: 'any',
    value: true,
  },
  {
    keyword: 'array',
    value: true,
  },
  {
    keyword: 'as',
    value: true,
  },
  {
    keyword: 'asc',
    value: true,
  },
  {
    keyword: 'authorization',
    value: true,
  },
  {
    keyword: 'backup',
    value: true,
  },
  {
    keyword: 'between',
    value: true,
  },
  {
    keyword: 'binary',
    value: true,
  },
  {
    keyword: 'blanksasnull',
    value: true,
  },
  {
    keyword: 'both',
    value: true,
  },
  {
    keyword: 'bytedict',
    value: true,
  },
  {
    keyword: 'case',
    value: true,
  },
  {
    keyword: 'cast',
    value: true,
  },
  {
    keyword: 'check',
    value: true,
  },
  {
    keyword: 'collate',
    value: true,
  },
  {
    keyword: 'column',
    value: true,
  },
  {
    keyword: 'constraint',
    value: true,
  },
  {
    keyword: 'create',
    value: true,
  },
  {
    keyword: 'credentials',
    value: true,
  },
  {
    keyword: 'cross',
    value: true,
  },
  {
    keyword: 'current_date',
    value: true,
  },
  {
    keyword: 'current_time',
    value: true,
  },
  {
    keyword: 'current_timestamp',
    value: true,
  },
  {
    keyword: 'current_user',
    value: true,
  },
  {
    keyword: 'current_user_id',
    value: true,
  },
  {
    keyword: 'default',
    value: true,
  },
  {
    keyword: 'deferrable',
    value: true,
  },
  {
    keyword: 'deflate',
    value: true,
  },
  {
    keyword: 'defrag',
    value: true,
  },
  {
    keyword: 'delta',
    value: true,
  },
  {
    keyword: 'delta32k',
    value: true,
  },
  {
    keyword: 'desc',
    value: true,
  },
  {
    keyword: 'disable',
    value: true,
  },
  {
    keyword: 'distinct',
    value: true,
  },
  {
    keyword: 'do',
    value: true,
  },
  {
    keyword: 'else',
    value: true,
  },
  {
    keyword: 'emptyasnull',
    value: true,
  },
  {
    keyword: 'enable',
    value: true,
  },
  {
    keyword: 'encode',
    value: true,
  },
  {
    keyword: 'encrypt',
    value: true,
  },
  {
    keyword: 'encryption',
    value: true,
  },
  {
    keyword: 'end',
    value: true,
  },
  {
    keyword: 'except',
    value: true,
  },
  {
    keyword: 'explicit',
    value: true,
  },
  {
    keyword: 'false',
    value: true,
  },
  {
    keyword: 'for',
    value: true,
  },
  {
    keyword: 'foreign',
    value: true,
  },
  {
    keyword: 'freeze',
    value: true,
  },
  {
    keyword: 'from',
    value: true,
  },
  {
    keyword: 'full',
    value: true,
  },
  {
    keyword: 'globaldict256',
    value: true,
  },
  {
    keyword: 'globaldict64k',
    value: true,
  },
  {
    keyword: 'grant',
    value: true,
  },
  {
    keyword: 'group',
    value: true,
  },
  {
    keyword: 'gzip',
    value: true,
  },
  {
    keyword: 'having',
    value: true,
  },
  {
    keyword: 'identity',
    value: true,
  },
  {
    keyword: 'ignore',
    value: true,
  },
  {
    keyword: 'ilike',
    value: true,
  },
  {
    keyword: 'in',
    value: true,
  },
  {
    keyword: 'initially',
    value: true,
  },
  {
    keyword: 'inner',
    value: true,
  },
  {
    keyword: 'intersect',
    value: true,
  },
  {
    keyword: 'into',
    value: true,
  },
  {
    keyword: 'is',
    value: true,
  },
  {
    keyword: 'isnull',
    value: true,
  },
  {
    keyword: 'join',
    value: true,
  },
  {
    keyword: 'leading',
    value: true,
  },
  {
    keyword: 'left',
    value: true,
  },
  {
    keyword: 'like',
    value: true,
  },
  {
    keyword: 'limit',
    value: true,
  },
  {
    keyword: 'localtime',
    value: true,
  },
  {
    keyword: 'localtimestamp',
    value: true,
  },
  {
    keyword: 'lun',
    value: true,
  },
  {
    keyword: 'luns',
    value: true,
  },
  {
    keyword: 'lzo',
    value: true,
  },
  {
    keyword: 'lzop',
    value: true,
  },
  {
    keyword: 'minus',
    value: true,
  },
  {
    keyword: 'mostly13',
    value: true,
  },
  {
    keyword: 'mostly32',
    value: true,
  },
  {
    keyword: 'mostly8',
    value: true,
  },
  {
    keyword: 'natural',
    value: true,
  },
  {
    keyword: 'new',
    value: true,
  },
  {
    keyword: 'not',
    value: true,
  },
  {
    keyword: 'notnull',
    value: true,
  },
  {
    keyword: 'null',
    value: true,
  },
  {
    keyword: 'nulls',
    value: true,
  },
  {
    keyword: 'off',
    value: true,
  },
  {
    keyword: 'offline',
    value: true,
  },
  {
    keyword: 'offset',
    value: true,
  },
  {
    keyword: 'old',
    value: true,
  },
  {
    keyword: 'on',
    value: true,
  },
  {
    keyword: 'only',
    value: true,
  },
  {
    keyword: 'open',
    value: true,
  },
  {
    keyword: 'or',
    value: true,
  },
  {
    keyword: 'order',
    value: true,
  },
  {
    keyword: 'outer',
    value: true,
  },
  {
    keyword: 'overlaps',
    value: true,
  },
  {
    keyword: 'parallel',
    value: true,
  },
  {
    keyword: 'partition',
    value: true,
  },
  {
    keyword: 'percent',
    value: true,
  },
  {
    keyword: 'placing',
    value: true,
  },
  {
    keyword: 'primary',
    value: true,
  },
  {
    keyword: 'raw',
    value: true,
  },
  {
    keyword: 'readratio',
    value: true,
  },
  {
    keyword: 'recover',
    value: true,
  },
  {
    keyword: 'references',
    value: true,
  },
  {
    keyword: 'rejectlog',
    value: true,
  },
  {
    keyword: 'resort',
    value: true,
  },
  {
    keyword: 'restore',
    value: true,
  },
  {
    keyword: 'right',
    value: true,
  },
  {
    keyword: 'select',
    value: true,
  },
  {
    keyword: 'session_user',
    value: true,
  },
  {
    keyword: 'similar',
    value: true,
  },
  {
    keyword: 'some',
    value: true,
  },
  {
    keyword: 'sysdate',
    value: true,
  },
  {
    keyword: 'system',
    value: true,
  },
  {
    keyword: 'table',
    value: true,
  },
  {
    keyword: 'tag',
    value: true,
  },
  {
    keyword: 'tdes',
    value: true,
  },
  {
    keyword: 'text255',
    value: true,
  },
  {
    keyword: 'text32k',
    value: true,
  },
  {
    keyword: 'then',
    value: true,
  },
  {
    keyword: 'to',
    value: true,
  },
  {
    keyword: 'top',
    value: true,
  },
  {
    keyword: 'trailing',
    value: true,
  },
  {
    keyword: 'true',
    value: true,
  },
  {
    keyword: 'truncatecolumns',
    value: true,
  },
  {
    keyword: 'union',
    value: true,
  },
  {
    keyword: 'unique',
    value: true,
  },
  {
    keyword: 'user',
    value: true,
  },
  {
    keyword: 'using',
    value: true,
  },
  {
    keyword: 'verbose',
    value: true,
  },
  {
    keyword: 'wallet',
    value: true,
  },
  {
    keyword: 'when',
    value: true,
  },
  {
    keyword: 'where',
    value: true,
  },
  {
    keyword: 'with',
    value: true,
  },
  {
    keyword: 'without',
    value: true,
  },
];

export default reservedText;
