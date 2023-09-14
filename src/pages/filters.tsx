import { Button, Container, Stack } from '@mantine/core';
import React from 'react';

export default function Filters({onClickFilter,filter}) {     
    return (
      <>    
        <Button.Group>
            <Button variant={filter=="All"? "outline":"default"} value={'All'} onClick={(event) => {onClickFilter(event.currentTarget.value);}}>All</Button>
            <Button variant={filter=="Active"? "outline":"default"} value={'Active'} onClick={(event) => {onClickFilter(event.currentTarget.value);}} >Active</Button>
            <Button variant={filter=="Completed"? "outline":"default"} value={'Completed'} onClick={(event) => {onClickFilter(event.currentTarget.value);}}>Completed</Button>
        </Button.Group>
     </>
    );
  }