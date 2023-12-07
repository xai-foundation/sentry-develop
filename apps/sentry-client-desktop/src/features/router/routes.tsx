import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {Sidebar} from "../sidebar";
import {GetSentryNode} from "../home/GetSentryNode.js";
import {Keys} from "../keys/Keys.js";
import {SentryWallet} from "../home/SentryWallet.js";
import {DrawerManager} from "../drawer/DrawerManager";
import {ModalManager} from "@/features/modal/ModalManager";
import {QueryClient, QueryClientProvider} from "react-query";
import {BlockpassHandler} from "@/components/blockpass/BlockpassHandler";
import {ChainDataManager} from "@/components/ChainDataManager";
import {createStore, Provider as JotaiProvider} from "jotai";
import {AccruingDataManager} from "@/components/AccruingDataManager";
import toast, {Toaster} from "react-hot-toast";

const store = createStore();

export function AppRoutes() {
	const queryClient = new QueryClient();

	window.ipcRenderer.on("update-available", () => {
		if (window.electron.platform === "win32") {
			toast.loading("Downloading update. Your app will restart soon.")
		} else {
			toast.success("Update is available for download at xai.games/sentrynodes", {duration: 10000});
		}
	});

	window.ipcRenderer.on("update-error", () => {
		if (window.electron.platform === "win32") {
			toast.remove();
			toast.error("Error downloading update. Retrying in 5 minutes.");
		}
	});

	return (
		<JotaiProvider store={store}>
			<Router>
				<QueryClientProvider client={queryClient}>
					<div className="w-full h-screen flex">
						<ChainDataManager/>
						<AccruingDataManager/>
						<BlockpassHandler/>
						<Sidebar/>
						<Toaster position="top-right"/>

						<div className="flex-grow">
							<Routes>
								<Route path="/" element={<GetSentryNode/>}/>
								<Route path="/keys" element={<Keys/>}/>
								<Route path="/sentry-wallet" element={<SentryWallet/>}/>
								{/*<Route path="/redeem" element={<Redeem/>}/>*/}
							</Routes>
						</div>

						<ModalManager/>
						<DrawerManager/>
					</div>
				</QueryClientProvider>
			</Router>
		</JotaiProvider>
	);
}
