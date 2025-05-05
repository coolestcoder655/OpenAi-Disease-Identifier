import "bootstrap/dist/css/bootstrap.min.css";

interface ListGroupProps {
  children: React.ReactNode[];
  onItemSelect: (item: React.ReactNode) => void;
  selectedItem: React.ReactNode;
}

const ListGroup = ({
  children,
  onItemSelect,
  selectedItem,
}: ListGroupProps) => {
  return (
    <>
      <ul className="list-group">
        {children.map((child, index) => (
          <li
            key={index}
            className={`list-group-item ${
              selectedItem === child ? "active" : ""
            }`}
            onClick={() => onItemSelect(child)}
          >
            {child}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
