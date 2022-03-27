const listsData = [
  {
    type: 'account',
    details: {
      name: '[Sys] Vocus System SSH',
      url: 'https://vocus-eod.system.telflow.com/',
      userName: 'ssh vocus-sys',
      theDetail: 'U2FsdGVkX1834h78xU3KIMFfcRkUzPbIA3OJLk2Vet0=',
    },
  },
  {
    type: 'commandLine',
    details: {
      name: '[Sys] Delete Supplier Address Workaround',
      url: '',
      userName: '',
      theDetail:
        'sudo docker exec consul_10_237_3_168 consul kv delete telflow/app/tmf-641-ic/addressSupplier',
    },
  },
  {
    type: 'note',
    details: {
      name: '[Gen] TMF Specification',
      url: '',
      userName: '',
      theDetail:
        'TMF Specification:\n- TMF673 - Address management system (It allows looking for worldwide addresses. It can also be used to validate geographic address data, to be sure that it corresponds to a real geographic address. Finally, it can be used to look for a geographic address by: searching an area as a start (city, town …), then zooming on the streets of this area, and finally listing all the street segments (numbers) in a street.).\n- TMF645 - Service Qualification (one of the Pre-Ordering Management APIs. Its goal is to provide service availability at Customer location).\n- TMF641 - Service Ordering (provides a standardized mechanism for placing a service order with all of the necessary order parameters. It allows users to create, update & retrieve Service Orders and manages related notifications.)\n- TMF637 Product Inventory Management (provides a standardized mechanism to retrieve product inventory information. The API consists of a simple set of operations that interact with Inventory systems in a consistent manner. Usually, a product is created and modified consequently to product order bit could be also ‘directly’ modified for administrative reason. )\n\n- Qualify = Address Validation (673) \n- Run Qualification = Site Qualification (645)\n\n- 673 itu ke maps, \n- 645 itu ke vocus address qual, \n- 641 itu ke blue planet, \n- 637 itu ke vocus inventory, \n- 633 itu importing CFS payload to telflow',
    },
  },
  {
    type: 'bookmark',
    details: {
      name: 'Google Photo to Direct Link Image',
      url: '',
      userName: '',
      theDetail: 'https://www.labnol.org/embed/google/photos/',
    },
  },
]

export default listsData
