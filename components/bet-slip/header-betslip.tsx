export const HeaderBetSlip = () => {
    return (
        <>
            <div className="flex w-screen justify-between relative py-5 px-6 bg-custom-black betslip__header">
                <p className="text-white text-sm pl-6">Bet Slip</p>
                <img 
                    src="https://go.moplay.com/imgs/i-v2/o/controls/close.svg"
                    className="items-center w-4 h-4"/>
            </div>
            <style jsx>{
                `
                .betslip__header:after {
                    content: '';
                    height: 3px;
                    background: #00d29b;
                    width: 45%;
                    bottom: 0;
                    left: 0;
                    position: absolute;
                }
                `
            }</style>
        </>
    )
}