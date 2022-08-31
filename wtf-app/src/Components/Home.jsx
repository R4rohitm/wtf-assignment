import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import {
  Box,
  Button,
  Flex,
  FormLabel,
  GridItem,
  Image,
  Input,
  Select,
  Text,
  Grid,
} from "@chakra-ui/react";

const Home = () => {
  const [gymData, setGymData] = useState();

  const getGymData = async () => {
    try {
      let response = await fetch(
        `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
      );
      let data = await response.json();
      setGymData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getGymData();
  }, []);
  return (
    <Box w="full" px="3%" py="40px" bg="#080808">
      <Flex
        flexDirection="row"
        border={"2px"}
        borderColor="white"
        rounded="md"
        height="60px"
        px="25px"
        py="10px"
        justifyContent={"space-between"}
        alignItems="center"
        gap="5px"
      >
        <Image h="16px" src="https://imgur.com/xundOwO.png" alt="search" />
        <Input
          outline="none"
          border="none"
          placeholder="Search gym name here"
          type="text"
          fontSize="20px"
          fontWeight="normal"
          color="white"
          _focusVisible="false"
          style={{ caretColor: "red" }}
        />
        <Button bg="#920909">
          <Image src="https://imgur.com/qmXsYWB.png" alt="location" />
        </Button>
        <Button color="white" px="20px" bg="#920909">
          Clear
        </Button>
      </Flex>
      <Flex
        mt="25px"
        w="full"
        h="140vh"
        justifyContent="space-between"
        flexDirection={{ lg: "row", md: "column", sm: "column" }}
        alignItems="center"
      >
        <Flex color="white" flexDirection="column" gap="25px" w="25%">
          <Text fontSize="45px">Filters</Text>
          <Flex flexDirection="column" gap="25px">
            <Box>
              <FormLabel fontSize="22px">Location</FormLabel>
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                h="60px"
                border="2px"
                px="10px"
                borderColor="#707070"
                rounded="md"
                bg="#2E2E2E"
              >
                <Image
                  h="16px"
                  src="https://imgur.com/xundOwO.png"
                  alt="search"
                />
                <Input
                  outline="none"
                  border="none"
                  _focusVisible="false"
                  fontSize="22px"
                  type="text"
                  placeholder="Enter Location"
                />
              </Flex>
            </Box>
            <Box>
              <FormLabel fontSize="22px">Price</FormLabel>
              <Flex flexDirection="row" gap="10px">
                <Box
                  rounded="md"
                  bg="#2E2E2E"
                  h="60px"
                  border="2px"
                  borderColor="#707070"
                  px="10px"
                  w="100px"
                >
                  <Input
                    outline="none"
                    border="none"
                    _focusVisible="false"
                    h="full"
                    w="full"
                    fontSize="22px"
                    type="number"
                    placeholder="Min"
                  />
                </Box>
                <Box
                  rounded="md"
                  bg="#2E2E2E"
                  h="60px"
                  border="2px"
                  borderColor="#707070"
                  px="10px"
                  w="100px"
                >
                  <Input
                    outline="none"
                    border="none"
                    _focusVisible="false"
                    h="full"
                    w="full"
                    fontSize="22px"
                    type="number"
                    placeholder="Max"
                  />
                </Box>
              </Flex>
            </Box>
            <Box>
              <FormLabel fontSize="22px">Cities</FormLabel>
              <Box
                rounded="md"
                bg="#2E2E2E"
                h="60px"
                border="2px"
                borderColor="#707070"
                px="10px"
              >
                <Select
                  outline="none"
                  border="none"
                  _focusVisible="false"
                  w="full"
                  h="60px"
                  placeholder="Select City"
                >
                  <option value="NewDelhi">New Delhi</option>
                  <option value="Ghaziabad">Ghaziabad</option>
                  <option value="GreaterNoida">Greater Noida</option>
                  <option value="Noida">Noida</option>
                  <option value="Delhi">Delhi</option>
                </Select>
              </Box>
            </Box>
          </Flex>
        </Flex>
        <Grid
          h="full"
          overflowY={{
            base: "auto",
            md: "auto",
            sm: "auto",
            lg: "auto",
            xl: "scroll",
          }}
          gap="6"
          w="70%"
          templateColumns="repeat(1, 1fr)"
          css={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
              backgroundClip: "content-box",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "red",
              borderRadius: "24px",
              height: "40px",
            },
          }}
        >
          {!!gymData &&
            gymData?.data?.map((e) => {
              return (
                <GridItem
                  color="white"
                  bgGradient="linear-gradient(92deg, rgba(36,36,36,1) 0%, rgba(19,19,19,1) 99%)"
                  rounded="md"
                  w="100%"
                  h="50vh"
                >
                  <Flex flexDirection="row" h="100%">
                    <Box w="48%"></Box>
                    <Flex
                      w="52%"
                      h="100%"
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      py="15px"
                      px="15px"
                    >
                      <Flex flexDirection="column" gap="14px">
                        <Text fontSize="20px" fontWeight="bold">
                          {e.gym_name}
                        </Text>
                        <Flex flexDirection="row" gap="1px">
                          {e.rating === 5 ? (
                            <>
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                            </>
                          ) : e.rating >= 4 ? (
                            <>
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                            </>
                          ) : e.rating >= 3 ? (
                            <>
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                            </>
                          ) : e.rating >= 2 ? (
                            <>
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                            </>
                          ) : e.rating >= 1 ? (
                            <>
                              <Image
                                h="16px"
                                src="https://imgur.com/zFYGEcK.png"
                                alt="star"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                              <Image
                                h="16px"
                                src="https://imgur.com/qihnIO3.png"
                                alt="emptystar"
                              />
                            </>
                          ) : null}
                        </Flex>
                        <Text fontSize="17px">
                          {e.address1}, {e.address2}
                        </Text>
                        <Flex
                          flexDirection="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          gap="2px"
                          fontSize="15px"
                          fontWeight="medium"
                        >
                          <Image
                            h="16px"
                            src="https://imgur.com/l86xpkx.png"
                            alt=""
                          />
                          {e.duration_text} away | {e.distance_text}
                        </Flex>
                      </Flex>
                      <Box w="full" textAlign="right">
                        <Button
                          bg="#920909"
                          px="20px"
                          py="25px"
                          fontWeight="medium"
                          cursor="pointer"
                        >
                          Book Now
                        </Button>
                      </Box>
                    </Flex>
                  </Flex>
                </GridItem>
              );
            })}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Home;
