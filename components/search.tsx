export default () => (
    <>
       <div className="flex relative my-2 mx-3 py-4 px-3 rounded-full" style={{background: '#191919'}}>
              <img src="https://go.moplay.com/imgs/i-v2/c/generic/search.svg" className="w-4 h-4"/>
              <input 
                     className="
                            flex-1 
                            w-full 
                            pin 
                            input--seach 
                            absolute 
                            text-left 
                            text-sm
                            text-white
                            pl-10
                            bg-transparent
                            outline-none
                     "
                     placeholder="What are you looking for?"/>
       </div>
       <style jsx>{`
       .input--seach::placeholder {
              color: #fff;
              opacity: 1;
       }
       `}</style>
    </>
  )