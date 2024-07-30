function LoanApp(props){
    const submitLoan = () => {
        props.onLoanSubmit("Data from submission");
    }
    return(
        <button onClick={submitLoan}>Submit</button>
    )
}

function Loan(){

    const handleLoanSubmit = (data) => {
        console.log(data);
    }
    return(
        <div>
            <p>Message from child: </p>
            <LoanApp onLoanSubmit={handleLoanSubmit}></LoanApp>
        </div>
    )
}

export default Loan;