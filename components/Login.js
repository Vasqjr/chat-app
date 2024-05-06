import Head from "next/head";
import { ChatIcon } from '@chakra-ui/icons';
import { Box } from "@chakra-ui/react";

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Box
                bgColor="rgb(127,0,255)"
                w="fit-content"
                padding={5}
                rounded="3xl"
            >
                <ChatIcon w="100px" h="100px" color="rgb(255,255,255)" />
            </Box>
            
    
        </>
        )
}