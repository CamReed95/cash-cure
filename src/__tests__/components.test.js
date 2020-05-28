import React, {Component} from 'react';
import {render, fireEvent} from '@testing-library/react';
import Income from '../Components/Income';

describe('testing for the values arr in Income component', () => {

    it('Renders out starting text', () => {
        const {container} = render(<Income/>)
        expect(container.textContent).toContain("Collecting values...")
    })

})

// test button in render in income to make sure button works

// test button in render in logout comp. to make sure button works 

// test button in render for logging in 

// test button in register comp. 

// 
