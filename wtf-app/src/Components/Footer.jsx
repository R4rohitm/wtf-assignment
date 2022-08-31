import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Grid
      w="full"
      h="65vh"
      bg="#080808"
      px="5%"
      py="4%"
      templateColumns="repeat(4, 1fr)"
    >
      <Flex
        flexDirection="column"
        gap="40px"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Image
          src="https://imgur.com/uI5OtfP.png"
          alt="wtflogo"
          h="90px"
          w="130px"
          objectFit={"contain"}
        />
        <Flex flexDirection="row" gap="20px">
          <Box px="8px" py="8px" rounded={"full"} bg="white">
            <a href="https://www.instagram.com/wtfupme/">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                alt="instagram"
                h="22px"
              />
            </a>
          </Box>
          <Box px="8px" py="8px" rounded={"full"} bg="white">
            <a href="https://www.facebook.com/wtfupme/">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png"
                alt="facebook"
                h="22px"
              />
            </a>
          </Box>
          <Box px="8px" py="8px" rounded={"full"} bg="white">
            <a href="https://www.linkedin.com/company/wtfupme/">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2111/2111499.png"
                alt="linkedin"
                h="22px"
              />
            </a>
          </Box>
        </Flex>
      </Flex>
      <GridItem color="#B5B5B5" fontSize="20px">
        <UnorderedList>
          <Text color="white" fontSize="24px" mb="22px" fontWeight="bold">
            Quick Links
          </Text>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            About
          </ListItem>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            FAQs
          </ListItem>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            Privacy Policy
          </ListItem>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            WTF in News
          </ListItem>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            Terms & Conditions
          </ListItem>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            Refund & Cancellation
          </ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem color="#B5B5B5" fontSize="20px">
        <UnorderedList>
          <Text color="white" fontSize="24px" mb="22px" fontWeight="bold">
            Explore
          </Text>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            Arenas
          </ListItem>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            Studios
          </ListItem>
          <ListItem listStyleType={"none"} mb="10px" cursor={"pointer"}>
            Nutrition
          </ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem color="#B5B5B5" fontSize="20px">
        <Text color="white" fontSize="24px" mb="22px" fontWeight="bold">
          Contact
        </Text>
        <Flex flexDirection="row" gap="35px" mb="10px">
          <Image
            mt="10px"
            h="20px"
            src="https://imgur.com/qmXsYWB.png"
            alt="location"
          />
          <Text>
            Ro: S 1502, Amarpali Silicon City, Sector 76,Noida, Uttar
            Pradesh,India
          </Text>
        </Flex>
        <Flex flexDirection="row" gap="35px" mb="10px">
          <Image
            h="20px"
            mt="10px"
            src="https://imgur.com/qmXsYWB.png"
            alt="location"
          />
          <Text>
            Ho: C-86 B, Ground Floor,Sector 8,Noida, Uttar Pradesh,India
          </Text>
        </Flex>
        <Flex flexDirection="row" gap="35px" mb="10px">
          <Image
            h="20px"
            mt="10px"
            src="https://imgur.com/Y9gahbX.png"
            alt="location"
          />
          <Text>+91 9090639005</Text>
        </Flex>
        <Flex flexDirection="row" gap="35px" mb="10px">
          <Image
            h="20px"
            mt="10px"
            src="https://imgur.com/36o4eWF.png"
            alt="location"
          />
          <Text>support@wtfup.me</Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Footer;
