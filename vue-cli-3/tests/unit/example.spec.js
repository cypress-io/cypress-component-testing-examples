import { shallowMount, mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import CounterComp from "@/components/CounterComp.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Counter.vue", () => {
  it("renders ", async () => {
      const wrapper = mount(Counter)
      const button = wrapper.find('button')
      const text = wrapper.find('p')
    
      expect(text.text()).toContain('Total clicks: 0')
    
      await button.trigger('click')
    
      expect(text.text()).toContain('Total clicks: 1')
  });
});

describe("CounterComp.vue", () => {
  it("renders ", async () => {
      const wrapper = mount(CounterComp)
      const button = wrapper.find('button')
      const text = wrapper.find('p')
    
      expect(text.text()).toContain('Total clicks: 0')
    
      await button.trigger('click')
    
      expect(text.text()).toContain('Total clicks: 1')
  });
});