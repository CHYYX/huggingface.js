/** Lanseq conversational inference provider. Model mappings are registered server-side by Hugging Face. */
import { BaseConversationalTask } from "./providerHelper.js";

export class LanseqConversationalTask extends BaseConversationalTask {
	constructor() {
		super("lanseq", "https://api.lanseq.cloud");
	}
}
