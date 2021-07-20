import React, { useState ,useEffect} from 'react'

  const Wrapper = (Component) => {
      
    function WrappedComponent(props) {
        const [state, setstate] = useState(0) 
        const EnterMe = () => {
            setstate(state + 1)
        }

        return <Component EnterMe={EnterMe} value={state}  {...props} />;
      }   
      return WrappedComponent;
  };

  export default Wrapper;