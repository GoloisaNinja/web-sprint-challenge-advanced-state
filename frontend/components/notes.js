//in reducer:

export const fetchStuff = () => (dispatch) => {
    axios.get("link")
    .then((response) => {
        dispatch(addcharacterresults)
    })
    .catch((error) => {
        console.log(error);
        
    })
}

//import it in your component by connect:
//import connect, fetchcharacter
useEffect(() => {
    props.fetchCharacter()
}, [])

export default connect(st=>st, {fetchCharacter})(Component)

//mounted,did not recall API -> quiz
// if (!props.quiz) {
//     props.fetcsomething()
// } in use effect