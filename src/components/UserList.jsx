export const UserList = (props) => {
  const { list } = props;
  //e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
  const getRewards = (transactions, month) => {
    const total = transactions.reduce((prev, current) => {
      const monthfromDate = getMonth(current.date);
      if (month === 'all') {
        prev = prev + calculateRewards(current.amount);
      } else if (monthfromDate === month) {
        prev = prev + calculateRewards(current.amount);
      }
      return prev;
    }, 0);
    return total;
  };

  // get month from date string
  const getMonth = (date) => {
    return date.split('-')[1];
  };

  const calculateRewards = (amount) => {
    if (amount > 50 && amount <= 100) {
      return (100 - amount) * 1;
    } else if (amount > 100) {
      return 2 * (amount - 100) + 1 * 50;
    } else return 0;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>UserName</th>
          {list[0].months.map((month, id) => (
            <th key={`${month}_${id}`}>{month}</th>
          ))}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            {list[0].months.map((month, id) => (
              <td key={`${month}_${id}`}>
                {getRewards(user.transactions, month)}
              </td>
            ))}
            <td>{getRewards(user.transactions, 'all')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
