module.exports.get = async (req, res) =>{
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    res.send(data)
}