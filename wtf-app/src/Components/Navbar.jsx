import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <>
      <Flex
        h="vh"
        w="full"
        bgGradient="linear-gradient(127deg, rgba(128,2,2,1) 0%, rgba(0,1,1,1) 92%)"
        py="25px"
        flexDirection="column"
        justifyContent="flex-start"
        gap="40px"
      >
        <Flex flexDirection="row" justifyContent="space-between" px="5%">
          <Box>
            <Image src="https://imgur.com/uI5OtfP.png" alt="wtflogo" h="40px" />
          </Box>
          <Flex flexDirection="row" justifyContent="flex-end" gap="10px">
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              gap="25px"
              color="#8D6868"
              fontSize="20px"
              fontWeight={"normal"}
            >
              <Box
                px="20px"
                h="40px"
                w="fit-content"
                _hover={{ color: "white" }}
                cursor="pointer"
              >
                Fitness
              </Box>
              <Box
                px="20px"
                h="40px"
                w="fit-content"
                _hover={{ color: "white" }}
                cursor="pointer"
              >
                Nutrition
              </Box>
              <Box
                px="20px"
                h="40px"
                w="fit-content"
                color="white"
                borderBottom="2px"
                borderBottomColor="#920909"
                cursor="pointer"
              >
                Gyms
              </Box>
              <Box
                px="20px"
                h="40px"
                w="fit-content"
                _hover={{ color: "white" }}
                cursor="pointer"
              >
                Become WTF Partner
              </Box>
              <Box
                px="20px"
                h="40px"
                w="fit-content"
                _hover={{ color: "white" }}
                cursor="pointer"
              >
                About Us
              </Box>
            </Flex>
            <Button
              bg="#D70101"
              color="whiteAlpha.600"
              _hover={{ color: "white" }}
              fontWeight="thin"
              px="15px"
              py="-2px"
            >
              Login
            </Button>
          </Flex>
        </Flex>

        <Box w="full" position="relative">
          <Text
            position="relative"
            zIndex="1"
            left="0"
            color="transparent"
            fontSize="250px"
            mb="60px"
            fontWeight="bold"
            style={{ WebkitTextStroke: "4px #890000" }}
          >
            Powered
          </Text>
          <Text
            position="absolute"
            right="2"
            top="40%"
            zIndex="4"
            fontSize="190px"
            fontWeight="bold"
            color="white"
          >
            GYM
          </Text>
          <Image
            h="440px"
            zIndex="2"
            position="absolute"
            top="0%"
            left="20%"
            src="https://imgur.com/BIzU7Uo.png"
            alt="female_model"
          />
          <Image
            h="410px"
            zIndex="3"
            position="absolute"
            top="10%"
            right="10%"
            src="https://imgur.com/fDk7nmo.png"
            alt="male_model"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
