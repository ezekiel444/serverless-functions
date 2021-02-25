
const result = document.querySelector('.result')

const fetchData = async()=>{
try {
    const {data} = await axios('/api/2-basic-api')
  const product =  data.map(({name,price,image:{url}})=>{
        return `
        <article class="product">
        <img
          src=${url}
          alt="utopia sofa"
        />
        <div class="info">
          <h5>${name}</h5>
          <h5 class="price">$${price}</h5>
        </div>
      </article>
` }).join('')
console.log(product);
return  result.innerHTML = product

} catch (error) {
    console.log(error.response.data);
}
}

fetchData()