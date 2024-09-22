import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'registerDocument',
        icon: 'fal fa-chart-bar',
        label: 'Register Document'
    },
    {
        routeLink: 'viewStatus',
        icon: 'fal fa-file',
        label: 'View Status'
    },
   
    {
        routeLink: 'departments',
        icon: 'fal fa-cog',
        label: 'Departments',
        expanded: false,
        items: [
            {
                routeLink: 'department/department1',
                label: 'Department 1'
            },
            {
                routeLink: 'settings/customize',
                label: 'Department 2'
            },
            {
                routeLink: 'settings/customize',
                label: 'Department 3'
            },
            {
                routeLink: 'settings/customize',
                label: 'Department 4'
            }
        ]
    },
];