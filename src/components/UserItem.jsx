import React from 'react';

//pasul 1  - cream o functie cu nemele fiserului
export function UserItem(props) {

    const { name, email } = props;
    //orice componenta de React trebuie sa returneze cod HTML
    return(
        //intotdeauna codul HTML il punem in paranteleze lui return
        <div> 
            <p>{ name }</p>
            <p>{ email }</p>

        </div>
    );
}


//intotdeauna trebuie sa dam export cand cream o functie
// adaugam la sfarsit nulele functiei (Ex: UserItem)
export default UserItem;


