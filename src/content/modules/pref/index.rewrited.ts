// この素晴らしいふぁみさん(https://github.com/kotonefami)にThanksを


// NOTE: 一旦はTypeScriptのPlaygroundなどで起動することをおすすめします


// NOTE: Color 型については実装前にこの記事を読むことをお勧めします: https://qiita.com/manjuu_eater/items/98d5e5f66e518ed98add
type Color = `#${string}`;
type TweetFooterButtons = "reply" | "retweet" | "like" | "share" | "analytics" | "bookmark";
type LinkDomainType = "x" | "twitter" | "fxtwitter" | "vxtwitter";
type IconType = "x" | "twitter" | "dog" | "tuic" | "custom";

// ObjectとStringなら共存できる (使うかは不明)
type IncludingObject = "aiueo" | "ankosoba" | {id:"o" | "me"}

class PrefValue<T> {
    /** 設定の初期値 */
    public readonly defaultValue: T;
    /** 設定の値 */
    public value: T;

    public constructor(defaultValue: T) {
        this.defaultValue = defaultValue;
        this.value = defaultValue;
    }

    // NOTE: このメソッドについては後述します
    private toJSON(): T {
        return this.value;
    }
}

// PrefValueのJSON.stringify()で飾りをつける版
class PrefValue_toJSONTest<T extends string> {
    /** 設定の初期値 */
    public readonly defaultValue: T;
    /** 設定の値 */
    public value: T;

    public constructor(defaultValue: T) {
        this.defaultValue = defaultValue;
        this.value = defaultValue;
    }

    private toJSON(): string {
        return `${this.value} + aiueoaaa`;
    }
}

class TUICPref<M extends Record<string, PrefValue<unknown> | PrefValue_toJSONTest<string>>> {
    /** 設定値 */
    public readonly map: M;

    public constructor(map: M) {
        this.map = map;
    }

    /** 設定キーのリストを取得します。 */
    public keys(): Extract<keyof M, string>[] {
        return Object.keys(this.map) as Extract<keyof M, string>[];
    }

    /** 設定を取得します。 */
    public get<K extends Extract<keyof M, string>>(key: K): M[K] {
        return this.map[key];
    }

    /** 設定します。 */
    public set<K extends Extract<keyof M, string>>(key: K, value: M[K] extends PrefValue<infer T> ? T : never): this {
        this.map[key].value = value;
        return this;
    }

    /** 設定を初期化します。 */
    public reset(): this {
        for (const [key, value] of Object.entries(this.map)) {
            this.map[key].value = this.map[key].defaultValue;
        }
        return this;
    }

    /** 同じバージョンの異なる設定を自分に上書きします。 */
    public migrate(other: TUICPref<M>): this {
        for (const key of Object.keys(this.map)) {
            this.map[key].value = other.map[key].value;
        }
        return this;
    }

    // NOTE: 命名は適当です。toJSON は内部的にしか呼ばれない（もちろん外部から呼んでもよい）のですが、対照でいい感じだと思ったので。
    /** 設定を JSON からロードします。 */
    public fromJSON(json: string): this {
        // TODO: 実装
        return this;
    }

    // NOTE: toJSON を実装しておくと、JSON.stringify を呼び出した際にここの値が利用されます。つまり、`JSON.stringify(new TUICPref())` の戻り値を生成する作業です。
    // NOTE: 先ほど PrefValue.toJSON を定義しておきましたが、あそこで定義していることによって、this.map 全体がプリミティブ型に変換可能となり、TUICPref クラスもプリミティブ型に変換可能となるのです。たぶんね。
    // NOTE: また、private としているのは外部呼び出しを想定しておらず、TUICPref.get の戻り値が {value, defaultValue} であってほしい、そのほうがきれいだからという理由です。
    private toJSON(): M {
        return this.map;
    }
}

/** 設定オブジェクト。このオブジェクトのキーと値に従いすべての設定およびi18nを管理します。 */
const PREFERENCES = {
    "colorButtonTweetUnsent": new PrefValue<Color>("#000000"),
    "colorButtonFollow": new PrefValue<Color>("#000000"),
    "colorButtonUnfollow": new PrefValue<Color>("#000000"),
    "colorButtonBlock": new PrefValue<Color>("#000000"),
    "colorButtonUnblock": new PrefValue<Color>("#000000"),

    "tweetFooterButtons": new PrefValue<TweetFooterButtons[]>(["reply", "retweet", "like", "share"]),
    "convertLikeToFavorite": new PrefValue<boolean>(true),
    "disableTweetEngagementModal": new PrefValue<boolean>(true),

    "tweetLinkCopyDomainType": new PrefValue<LinkDomainType>("fxtwitter"),
    "tweetLinkShareDomainType": new PrefValue<LinkDomainType>("fxtwitter"),

    "iconType": new PrefValue<IconType>("twitter"),

    "TestObjectAndString": new PrefValue<IncludingObject>("aiueo"),

    "TestToString": new PrefValue_toJSONTest<"a" | "b" | "q">("a"),
};

// NOTE: 補足しておくと、この場合 PREFERENCES は定数なのに、TUICPref クラスによって値が書き換えられてしまいます。まあでも、defaultValue プロパティがあるんですから、特に問題はないですよね？
// NOTE: 2回TUICPrefをインスタンス化したい！と言われるとちょっと悩みますね。イメージですが、そうする場合はどうにかして PREFERENCES をディープクローンする必要があると思います。でも私が知る限り、そんな場面は発生していないように思えますが……。
const pref = new TUICPref(PREFERENCES);
const disableTweetEngagementModal = pref.get("disableTweetEngagementModal");
pref.set("disableTweetEngagementModal",true)
console.log(disableTweetEngagementModal.value) // 今の設定の値
console.log(disableTweetEngagementModal.defaultValue) // デフォルトの値

pref.set("TestObjectAndString",{id:"me"})

console.log(JSON.stringify(pref,undefined,2))