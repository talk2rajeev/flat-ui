import * as React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { Button, ButtonInterface } from '../../Button';

const props: ButtonInterface = {
    buttonType: 'primary',
    label: 'click me',
    buttonSize: 'medium',
    onclick: jest.fn(),
    //disabled?: boolean,
    //withBorderRadius?: boolean,  
};

describe('Button', ()=>{
    test('Render primary, medium button', () => {
        const wrapper = shallow(<Button {...props} />);
        // expect(wrapper.find('.rt-btn--medium')).toHaveLength(1);
        // expect(wrapper.find('.rt-btn--primary')).toHaveLength(1);
        expect(wrapper.hasClass('rt-btn--medium')).toEqual(true);
        expect(wrapper.hasClass('rt-btn--primary')).toEqual(true);
    });
    test('Render disabled button', () => {
        const nProps = {...props, disabled: true}
        const wrapper = shallow(<Button {...nProps} />);
        expect(wrapper.props().disabled).toEqual(true)
    }); 
    test('Render button with radius class', () => {
        const nProps = {...props, withBorderRadius: true}
        const wrapper = shallow(<Button {...nProps} />);
        expect(wrapper.hasClass('rt-btn--withradius')).toEqual(true);
    }); 
    test('click event fired once', () => {
        const wrapper = shallow(<Button {...props} />);
        wrapper.simulate('click');
        expect(props.onclick).toBeCalledTimes(1);
    }); 
})
