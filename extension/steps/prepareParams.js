const prepareParamsForGetProduct = async (context, {type, id}) => {
  return {
    searchPhrase: '*',
    limit: 20,
    offset: 0
  }
}

module.exports = prepareParamsForGetProduct
