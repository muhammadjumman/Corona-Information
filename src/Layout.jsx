import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Text,
  Flex,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Divider,
} from "@chakra-ui/react";
import millify from "millify";

const Layout = ({ continent, country, population }) => {
  return (
    <>
      <Stack pt="5" divider={<StackDivider />}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={"500"}>Continent:</Text>
          <Text>{continent}</Text>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={"500"}>Country:</Text>
          <Text>{country}</Text>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={"500"}>Population:</Text>
          <Text>{millify(population)}</Text>
        </Box>
      </Stack>
    </>
  );
};

export default Layout;
