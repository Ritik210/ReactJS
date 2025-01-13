

const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: 'blank'
    },
    children: 'Click me'
}

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    //-----------------------------------------------------------------
    // this is not good if we don't know the exact number of attributes to set
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    //so-----------------------------------------------------

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement)

}



customRender(reactElement, mainContainer);