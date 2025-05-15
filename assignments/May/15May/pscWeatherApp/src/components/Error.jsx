function Error({ error }) {
  return (
    <div style={{ color: 'red', margin: '1rem 0', fontWeight: 'bold' }}>
      <p>{error}</p>
    </div>
  );
}

export default Error;
