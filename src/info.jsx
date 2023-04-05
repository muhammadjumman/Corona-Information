import React, { useEffect, useState } from 'react'
import { Box, FormControl, FormLabel, Select, Text, Flex, Card, CardHeader, CardBody, CardFooter,Center, Stack, StackDivider, Divider, Grid} from '@chakra-ui/react'
import Layout from './Layout'
import TableData from './TableData'
import Death from './Death'
import Tests from './Tests'
import { MdOutlineCoronavirus } from 'react-icons/md'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {ChevronUpIcon} from '@chakra-ui/icons'

const Info = () => {
    const [country, setCountry] = useState(null)
    const [theCountry, setTheCountry] = useState(null)
    const [info, setInfo] = useState(null)
    const [toggle, setToggle] = useState(false)


    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
    };
    useEffect(() => {

        fetch('https://covid-193.p.rapidapi.com/countries', options)
        .then(response => response.json())
        .then(response => setCountry(response.response))
        .catch(err => console.error(err));
    }, []);

    useEffect(() => {

        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${theCountry}`, options)
        .then(response => response.json())
        .then(response => setInfo(response.response[0]))
        .catch(err => console.error(err));
    }, [theCountry]);



  return (
    <Grid  mt={20} mb={20}  >
      <Flex flexDirection={'column'}  justifyContent={'center'} alignItems={'center'}  >
        <Card >
            <CardHeader textTransform={'uppercase'} pt={2} pb={2}>Covid Info</CardHeader>
            <Divider />
            <CardBody>
                <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select placeholder='Select Country' onChange={(e)=> setTheCountry(e.target.value)} >
                        {country && country.map((e)=>(
                            <option key={e} value={e}>{e}</option>
                        )) }
                    </Select>
                </FormControl>
                {info && <><Layout
                          continent={info.continent}
                          country={info.country}
                          population={info.population} />
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mt='5' fontSize={'35'} >
                                <MdOutlineCoronavirus/>
                                {toggle 
                                ?<ChevronUpIcon onClick={()=>setToggle(false)}/>
                                :<ChevronDownIcon onClick={()=>setToggle(true)}/>
                                }
                        </Box>
                          </>
                }

               {toggle && <> <TableData 
                newCase={info.cases.new} 
                active={info.cases.active}
                critical={info.cases.critical}
                recovered={info.cases.recovered}
                perMillion={info.cases['1M_pop']}
                total={info.cases['total']}
                />
                <Death newCase={info.deaths.new} perMillion={info.deaths['1M_pop']} total={info.deaths.total} />
                <Tests  perMillion={info.tests['1M_pop']} total={info.tests.total} />
                </>}
            </CardBody>
            {info && 
            <CardFooter display={'flex'} flexDirection={'column'}>
            <Text>{info.day}</Text>
            <Text>{new Date().toLocaleTimeString()}</Text>
          </CardFooter>
            }
        </Card>
      </Flex>
    </Grid>
  )
}

export default Info;
