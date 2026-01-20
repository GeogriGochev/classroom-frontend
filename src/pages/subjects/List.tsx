import { ListView } from '@/components/refine-ui/views/list-view';
import { Breadcrumb } from '@/components/refine-ui/layout/breadcrumb';

const SubjectsList = () => {
  return (
    <ListView>
      <Breadcrumb/>
      <h1 className='page-title'>Subjects</h1>
    </ListView>
  )
}

export default SubjectsList
