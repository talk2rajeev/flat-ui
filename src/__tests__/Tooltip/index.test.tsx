import React from 'react';
import { shallow, mount } from 'enzyme';
import { Tooltip, TooltipInterface } from '../../Tooltip';

const props: TooltipInterface = {
    title: 'This is tooltip',
    children: <p>This is from the child element</p>,
    alignment: "top",
};
// defaultValue?: string;
// border?: boolean;
// borderRadius?: boolean;  

describe('Tooltip', ()=>{
    test('on mouseenter and mouseleave event show and hide tooltip', () => {
        const wrapper = shallow(<Tooltip {...props} />);
        wrapper.find('.rt-tooltip-wrapper').simulate('mouseenter');
        expect(wrapper.find('.rt-tooltip-text')).toHaveLength(1);
        expect(wrapper.find('.rt-tooltip-text').text()).toMatch('This is tooltip');

        wrapper.find('.rt-tooltip-wrapper').simulate('mouseleave');
        expect(wrapper.find('.rt-tooltip-text')).toHaveLength(0);
    });

    test('alignment of the tooltip', () => {
        const wrapper = shallow(<Tooltip {...props} />);
        wrapper.find('.rt-tooltip-wrapper').simulate('mouseenter');
        expect(wrapper.find(`.rt-tooltip--align-${props.alignment}`)).toHaveLength(1);
        expect(wrapper.find(`.rt-tooltip-arrow--align-${props.alignment}`)).toHaveLength(1);

        wrapper.find('.rt-tooltip-wrapper').simulate('mouseleave');
        expect(wrapper.find('.rt-tooltip-text')).toHaveLength(0);
        expect(wrapper.find(`.rt-tooltip--align-${props.alignment}`)).toHaveLength(0);
        expect(wrapper.find(`.rt-tooltip-arrow--align-${props.alignment}`)).toHaveLength(0);
    });

    test('render children', () => {
        const wrapper = shallow(<Tooltip {...props} />);
        wrapper.find('.rt-tooltip-wrapper').simulate('mouseenter');
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toMatch('This is from the child element');
    });

})
