
const y = 'lele'
const f = () => {
    const x = 'lala'
    return () => {
        const z = 'lolo'
        console.log(x, y, z)
    }
}
f()()