import styled from 'styled-components';
import { Skeleton } from '../../feedback/skeleton';

const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

const TableRowSkeleton = styled(Skeleton)`
  flex: 1;
`;

export { TableBody, TableRowSkeleton };
