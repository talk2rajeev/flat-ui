import * as React from 'react';
import { shallow } from 'enzyme';
import { InputNumber, InputNumberInterface } from '../../InputNumber';

const props: InputNumberInterface = {
    onInputChange: jest.fn(),
};
// defaultValue?: string;
// border?: boolean;
// borderRadius?: boolean;  

describe('InputNumber', ()=>{
    test('fire change event', () => {
        const wrapper = shallow(<InputNumber {...props} />);
        wrapper.find('.rt-input-number').simulate('change', {target: {value: 1}} );
        expect(props.onInputChange).toHaveBeenCalledWith(1, "");

        const nProps = {...props, name: 'user'}
        const wrapper1 = shallow(<InputNumber {...nProps} />);
        wrapper1.find('.rt-input-number').simulate('change', {target: {value: 123}} );
        expect(props.onInputChange).toHaveBeenCalledWith(123, "user");
    });
    test('type is number', () => {
        const wrapper = shallow(<InputNumber {...props} />);
        expect(wrapper.find('input').props().type).toMatch('number');
    });
    test('is disabled', () => {
        const nProps = {...props, disabled: true}
        const wrapper = shallow(<InputNumber {...nProps} />);
        expect(wrapper.hasClass('rt-inputnumber-container--disabled')).toEqual(true);
        expect(wrapper.find('input').props().disabled).toEqual(true);
    });
    test('has borderRadius', () => {
        const nProps = {...props, borderRadius: true}
        const wrapper = shallow(<InputNumber {...nProps} />);
        expect(wrapper.find('input').hasClass('rt-input-number--with-radius')).toEqual(true);
    });
    test('has border', () => {
        const wrapper = shallow(<InputNumber {...props} />);
        expect(wrapper.find('input').hasClass('rt-input-number--bordered')).toEqual(true);
        const nProps = {...props, border: false}
        const wrapper1 = shallow(<InputNumber {...nProps} />);
        expect(wrapper1.find('input').hasClass('rt-input-number--not-bordered')).toEqual(true);
    });
})
