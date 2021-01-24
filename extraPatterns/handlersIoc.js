module.exports.get = axios => async (req, res) =>{
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.send(data)
}