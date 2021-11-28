import * as React from 'react';
import { shallow } from 'enzyme';
import { InputText, InputTextInterface } from '../../InputText';

const props: InputTextInterface = {
    onInputChange: jest.fn(),
};
// defaultValue?: string;
// border?: boolean;
// borderRadius?: boolean;  

describe('InputText', ()=>{
    test('fire change event', () => {
        const wrapper = shallow(<InputText {...props} />);
        wrapper.find('.rt-input-text').simulate('change', {target: {value: 't'}} );
        expect(props.onInputChange).toHaveBeenCalledWith("t", "");

        const nProps = {...props, name: 'user'}
        const wrapper1 = shallow(<InputText {...nProps} />);
        wrapper1.find('.rt-input-text').simulate('change', {target: {value: 'test'}} );
        expect(props.onInputChange).toHaveBeenCalledWith("test", "user");
    });
    test('type is text', () => {
        const wrapper = shallow(<InputText {...props} />);
        expect(wrapper.find('input').props().type).toMatch('text');
    });
    test('is disabled', () => {
        const nProps = {...props, disabled: true}
        const wrapper = shallow(<InputText {...nProps} />);
        expect(wrapper.hasClass('rt-input-container--disabled')).toEqual(true);
        expect(wrapper.find('input').props().disabled).toEqual(true);
    });
    test('has borderRadius', () => {
        const nProps = {...props, borderRadius: true}
        const wrapper = shallow(<InputText {...nProps} />);
        expect(wrapper.find('input').hasClass('rt-input-text--with-radius')).toEqual(true);
    });
    test('has border', () => {
        const wrapper = shallow(<InputText {...props} />);
        expect(wrapper.find('input').hasClass('rt-input-text--bordered')).toEqual(true);
        const nProps = {...props, border: false}
        const wrapper1 = shallow(<InputText {...nProps} />);
        expect(wrapper1.find('input').hasClass('rt-input-text--not-bordered')).toEqual(true);
    });
    test('has icon with alignment left and right', () => {
        const nProps: InputTextInterface = {...props, icon: <span>🔍</span>, iconAlignment: 'left'}
        
        const wrapper = shallow(<InputText {...nProps } />);
        expect(wrapper.find('input').hasClass('rt-input-text--icon-padding-left')).toEqual(true);
        expect(wrapper.find('span').at(0).hasClass('rt-input-icon')).toEqual(true);
        expect(wrapper.find('span').at(0).hasClass('rt-input-icon--left')).toEqual(true);
        
        const sPops: InputTextInterface = {...nProps, iconAlignment: 'right'};
        const wrapper1 = shallow(<InputText {...sPops} />);
        expect(wrapper1.find('input').hasClass('rt-input-text--icon-padding-right')).toEqual(true);
        expect(wrapper1.find('span').at(0).hasClass('rt-input-icon--right')).toEqual(true);
    });
})
