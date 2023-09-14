import styles from "./index.module.css";
import morestyles from "./index.css";

import Newtodo from "./newtodo.tsx";
import  { useState } from 'react';
import List from "./list";
import { Flex, Stack, Title } from "@mantine/core";
import Filters from "./filters";


export default function Home() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(['all']);

  const handleAddValue = (value) => {
    if (value.trim() !== '') {
      const newItem = { stat: 0, text: value};
      setItems([...items, newItem]);
    }
  };

  const handleChangStat = (index) => {
    const updatedItems = [...items];
    updatedItems[index].stat = updatedItems[index].stat === 1 ? 0 : 1;
    setItems(updatedItems);
  };

  const handlDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handlEditItem = (index,editedText) =>{
    const updatedItems = [...items];
    updatedItems[index].text = editedText;
    setItems(updatedItems);
  }
  
  const handClickFilter= (filterVal) => {
    setFilter(filterVal);    
  }

  return (
    <>    
    <Stack  align="center" >    
        <Title>todos</Title>   
        <Newtodo onEnter={handleAddValue}></Newtodo>        
        {items.length>0 && (
          <List items={items} onChangeStat={handleChangStat} onDeleteItem={handlDeleteItem} 
          onEditItem={handlEditItem} filter={filter}></List>
          )
        }
        {items.length>0 && (
          <Filters onClickFilter={handClickFilter} filter={filter}></Filters>
          )
        }
        
    </Stack>
    </>
  );
}