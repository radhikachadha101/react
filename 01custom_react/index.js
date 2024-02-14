const customRender = (reactElement, container) => {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
    
    for(prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click here to visit google"
}

const container = document.querySelector("#root");

customRender(reactElement,container);