module.exports.parseAttributes = function(raw) {
  return Object.assign(
    ...raw
      .split(',')
      .map(col => col.split(':'))
      .map(([key, value]) => ({ [key]: value }))
  );
};

module.exports.mockAttributes = function(
  attributes,
  string = 'foo',
  integer = 99,
  text = 'bar'
) {
  return Object.assign(
    ...Object.keys(attributes).map(key => {
      if (attributes[key] === 'string') return { [key]: string };
      if (attributes[key] === 'integer') return { [key]: integer };
      if (attributes[key] === 'text') return { [key]: text };
      return { [key]: attributes[key] };
    })
  );
};
