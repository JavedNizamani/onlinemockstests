
const adminMcqs = (req, res)=>{
    let mySubjectsArr = ['Networking','Java']
    res.render('adminMcqs', { 'title': 'AdminMcqs', mySubjectsArr});
}
export {adminMcqs}