import React, { useState } from 'react';
import { Button, Checkbox, Flex, TextInput } from '@mantine/core';



export default function List({items,onChangeStat,onDeleteItem,onEditItem,filter}) {
   
    const filteredItems = items.filter((item) => {
      if (filter === 'Active') {
        return item.stat === 0;
      } else if (filter === 'Completed') {
        return item.stat === 1;
      } else {
        return true;
      }
    });
    
    const listItems = filteredItems.map((item, index) => (
    
        <li key={index} >           
           <Flex
              gap={{ base: 'sm', sm: 'lg' }}
              justify="flex-start"
              align="center"
              direction="row"
              wrap="wrap"
              sx={{ border :'1px solid #ccc',padding: '10px' }}
            >                    
            <Checkbox
                    checked={item.stat === 1}                         
                    color="lime"
                    radius="lg"
                    size="md"
                    onChange={() => onChangeStat(index)}                   
            />
            <TextInput aria-label="My input"
                    value={item.text }        
                    variant="unstyled"
                    td={item.stat === 1 ? "line-through" : ""}       
                    onChange={(event) => {
                    onEditItem(index, event.target.value);}}
                      
            />
            <Button  variant="white" onClick={() => onDeleteItem(index)}>X</Button>
          </Flex>        
        </li>
      ));
  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        {listItems}
      </ul>
     </>
  );
}