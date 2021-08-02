import Homepage from '../../../project/components/user/homepage';
const Layout = ({children}) => {
    return (
        <div>
            <Homepage/>
            {children}
        </div>
    );
}
export default Layout;