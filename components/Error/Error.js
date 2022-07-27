class Error{
    render(){
        const html = `
            <div class="error-container">
                <p class="error__wtf">WTF?!?!</p>
                <p class="error__nc">No connection(</p>
                <p class="error__nc">Mb later!</p>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    };
}

const errorPage = new Error();