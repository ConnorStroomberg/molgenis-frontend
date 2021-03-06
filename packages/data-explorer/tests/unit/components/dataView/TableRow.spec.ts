import { shallowMount } from '@vue/test-utils'
import TableRow from '@/components/dataView/TableRow.vue'

describe('EntityTableRow.vue', () => {
  it('exists', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        id: 'id',
        tableName: 'tableName',
        rowData: {},
        visibleColumns: []
      }
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders table rows', () => {
    const wrapper = shallowMount(TableRow, {
      propsData: {
        id: 'id',
        tableName: 'tableName',
        rowData: { name: 'name', title: 'title', content: 'content' },
        visibleColumns: [{ name: 'name' }, { name: 'title' }, { content: 'content' }]
      }
    })
    expect(wrapper.findAll('td').length).toEqual(4) // length + 1 for edit btn
  })

  it('only renders visible columns', () => {
    const wrapper = shallowMount(TableRow, { propsData: {
      id: 'id',
      rowData: { name: 'name', title: 'title', content: 'content' },
      visibleColumns: [{ name: 'name' }, { content: 'content' }]
    } })
    expect(wrapper.findAll('td').length).toEqual(3) // length + 1 for edit btn
  })
})
