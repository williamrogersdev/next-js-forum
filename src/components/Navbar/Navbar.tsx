import { Flex, Image } from '@chakra-ui/react';
import React from 'react';



const Navbar:React.FC= () => {
    
    return (

        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex>
                <Image src="/images/redditFace.svg" />
                <Image />
            </Flex>
            Nav
        </Flex>
    )
}
export default Navbar;