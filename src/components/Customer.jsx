const Customer = (props) => {
    const { firstName, lastName, job} = props.data;
  
    return (
      <li className="text-warning bg-dark my-2 p-3">
        {firstName} {lastName} | Job: {job}
      </li>
    );
};

  export default Customer;