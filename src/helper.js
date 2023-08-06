/**
 * Generates a new object from an array by reducing it and setting the titles as keys with a default value of false.
 *
 * @param {Array} array - The array to be reduced.
 * @param {Function} method - The method to be applied in the reduction.
 * @return {Object} - The new object generated from the array.
 */
const addMethodToObject = (array, method) => {
  const newObject = array?.reduce((acc, obj) => {
    if (obj.hasOwnProperty(method)) {
      acc[obj.method] = false;
    }
    return acc;
  }, {})
}

const visitCounter = () => {
  let visits = localStorage.getItem('visits') || 0
  localStorage.setItem('visits', visits++)
  console.log(visits)
  return visits
}

export { addMethodToObject, visitCounter }