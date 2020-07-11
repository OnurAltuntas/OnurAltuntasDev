import { useSpring, animated } from 'react-spring'

const fade = useSpring({
    from : {
      opacity : 0
    },
    to:{
      opacity : 1
  }
  });

  export default fade;