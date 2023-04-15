import React from "react";

const styles = {
  listItem: {
    marginLeft: 5,
    fontSize: 25,
    backgroundColor: "#ccc",
    color: 'black',
    fontWeight: 'bold'
  },
  

}

// const linkArray = ['Github', 'LinkdIn', 'Twitter']

const linksArray = [
  {
    site: 'Github',
    url: 'https://github.com/rmob',
    id: 1,
  },
  {
    site: 'LinkedIn',
    url: 'https://linkedin.com/in/riley-obryan',
    id: 2,
  },
  {
    site: 'Twitter',
    url: 'https://twitter.com/OBryanRiley',
    id: 3,
  },

]

// export function Links(props) {
//   return <li style={styles.listItem}>{props.link}</li>
// }

// export default function Footer() {
//   return (
//     <div className="footer">
//        <ul>
//         {linkArray.map(link => <Links link={link} /> )}
//        </ul>
//     </div>
//   );
// }

export function Links(props) {
  return <li style={styles.listItem}>
    <a style={styles.listItem} href={props.url}>{props.site}</a>
    </li>
}

export default function Footer() {
  return (
    <div className="footer">
       <ul id="footer-links">
        {linksArray.map(link => <Links site={link.site} url={link.url} key={link.id} /> )}
       </ul>
    </div>
  );
}