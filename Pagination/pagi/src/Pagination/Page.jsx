import React from 'react'

function Page() {
  
    const Users = [
        {
          id: 1,
          title: Moses,
          url: www.google.com
        }
      ];

      const UsersList = Users.map((img) => (
        <li key={img.id}>{img.title}</li>
      ));


  return (
    <div className='pagination'>
     
    </div>
  )
}

export default Page