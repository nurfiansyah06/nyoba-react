export default (number) => {
  const formatNumberring = new Intl.NumberFormat("id-ID");
  return formatNumberring.format(number);
};
