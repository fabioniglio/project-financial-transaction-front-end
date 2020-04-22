const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('en-GB').format(new Date(value)); // TODO

export default formatDate;
